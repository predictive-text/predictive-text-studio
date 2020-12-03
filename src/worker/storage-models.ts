/**
 * @file Interfaces used in storage
 */

import { WordList } from "@common/types";
/**
 * A word list stored in the database.
 */
export interface StoredWordList {
  /** Autogenerated primary key */
  id?: number;

  /**
   * Typically the filename of the uploaded dictionary source.
   */
  name: string;
  /**
   * The actual contents of said file.
   */
  wordlist: WordList;
}

/**
 * The information needed to create a KMP file
 */
export interface StoredProjectData {
  /**
   * Primary key. For now, there is only one project, with PACKAGE_ID as its
   * primary key.
   */
  id?: number;

  /**
   * The name of language. Could be different than what is fetched by an API.
   */
  langName: string;

  /**
   * The valid BCP-47 tag for the language.
   */
  bcp47Tag: string;

  /**
   * Who created the model?
   */
  authorName: string;

  /**
   * A custom model ID string.
   */
  modelID?: string;

  /**
   * The model copyright.
   */
  copyright?: string;

  /**
   * The version number of the model.
   */
  version?: string;
}

export interface KeyboardData {
  /**
   * Store bcp47Tag as the primarykey
   */
  bcp47Tag: string;
  /**
   * Keyboard Language of the bcp47Tag
   */
  language: string;
}
export interface KeyboardDataWithTime extends KeyboardData {
  /**
   * Timestamp of last updated time
   */
  timestamp: Date;
}
export interface KMPPackageData {
  /** Autogenerated primary key */
  id?: number;
  /** The coompiled KMP package */
  KMPPackage: ArrayBuffer | File;
}