import {
  KmpJsonFile,
  KmpJsonFileSystem,
  KmpJsonFileOptions,
  RelevantKmpOptions,
} from "@common/kmp-json-file";

import * as bcp47 from "bcp-47";

/**
 * Pretend that the KMP was generated by Keyman 13.0 (released 2020-02-19),
 * compatible with Keyman 12.
 *
 * See: https://help.keyman.com/developer/version-history/
 */
const fakeKmpSystem: KmpJsonFileSystem = {
  /**
   * Keyman Developer v13.0.100.0 has created valid KMP files, so we pretend
   * to be it!
   */
  keymanDeveloperVersion: "13.0.100.0",
  /**
   * As of 2020-09-27, KMP 12.0 is the most compatible version supported by
   * the platform:
   */
  fileVersion: "12.0",
};

const fakeKmpOptions: KmpJsonFileOptions = {
  /* This option is only applicable to keyboards, and not lexical models, but
   * it's REQUIRED, so just set it to false! */
  followKeyboardVersion: false,
};

/**
 * The default model version. 1.0.0 also happens to be the minimum model
 * version that the Keyman team will publish.
 */
const defaultVersion = "1.0.0";

/**
 * Default author ID if no author is specified.
 */
const defaultAuthorID = "example";

/**
 * Given relevant metadata of the lexical model, this fills out the rest of
 * the details and generates an appropriate kmp.json file.
 *
 * The only thing absolutely required is at least language that the lexical
 * model is created for.
 */
export function generateKmpJson(options: Readonly<RelevantKmpOptions>): string {
  if (options.languages.length < 1) {
    throw new Error("Must provide at least one language");
  }

  const primaryLanguageName = options.languages[0].name;
  const primaryLanguageBCP47 = options.languages[0].id;
  const primaryLanguageISO639 = bcp47.parse(primaryLanguageBCP47).language;

  const authorName = options.authorName || "Unknown Author";
  const authorEmail = options.authorEmail || "nobody@example.com";
  const modelTag = options.modelTag || primaryLanguageISO639;

  const authorID = options.authorID || generateAuthorID(options.authorName);
  const modelID =
    options.modelID || `${authorID}.${primaryLanguageISO639}.${modelTag}`;
  const modelFilename = `${modelID}.model.js`;

  const currentYear = new Date().getFullYear();

  const kmpJson: KmpJsonFile = {
    system: fakeKmpSystem,
    options: fakeKmpOptions,
    info: {
      author: {
        description: authorName,
        url: `mailto:${authorEmail}`,
      },
      copyright: {
        description: options.copyright || `© ${currentYear} ${authorName}.`,
      },
      name: {
        description:
          options.modelUserReadableName || `${primaryLanguageName} dictionary`,
      },
      version: {
        description: options.version || defaultVersion,
      },
    },
    files: [
      {
        name: modelFilename,
        description: `Lexical Model ${modelFilename}`,
        copyLocation: "0", // yes, it's always "0"
        fileType: ".model.js",
      },
    ],
    lexicalModels: [
      {
        name: `${primaryLanguageName} dictionary`,
        id: modelID,
        languages: options.languages,
      },
    ],
  };

  return JSON.stringify(kmpJson);
}

/**
 * Generates the author ID from the given author name.
 */
function generateAuthorID(authorName?: string): string {
  if (!authorName) {
    return defaultAuthorID;
  }

  // TODO: this should be verified against the official spec.  Namely, the ID
  // should be a non empty string of lowercase ASCII letters.
  return authorName.trim().toLowerCase().replace(/[- ]/, "");
}
