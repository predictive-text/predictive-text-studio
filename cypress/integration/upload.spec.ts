import "cypress-file-upload";

import path = require("path");

describe("Upload from the the landing page and Download KMP", function () {
  let downloadFolder: string;

  before(() => {
    downloadFolder = Cypress.env("downloadFolder");
  });

  beforeEach(() => {
    cy.clearLocalDataExceptKeyboards();
    cy.task("clearDownloads");
    cy.allowUnlimitedDownloadsToFolder(downloadFolder);
  });

  it("should find a button to press to upload a file", function () {
    // Load languages
    cy.visit("/");
    cy.wait(500);

    cy.data("download-kmp")
      .as("download-kmp")
      .should("have.attr", "data-download-state", "disabled");

    const downloadedFilePath = path.join(downloadFolder, "Example.kmp");
    cy.generateProject();

    cy.wait(1000);
    cy.get("@download-kmp")
      .should("have.attr", "data-download-state", "ready")
      .click();

    cy.readZip(downloadedFilePath).then((zip) => {
      expect(zip.file("kmp.json")).to.not.be.null;
      expect(zip.file(/[.]js$/)).to.have.lengthOf(1);
    });
  });

  it("should download kmp file from languages download button", function () {
    cy.generateProject();
    cy.wait(1000);
    cy.visit("/customize");
    cy.wait(1000);

    const downloadedFilePath = path.join(
      downloadFolder,
      "Predictive-Text-Studio-Dictionary.kmp"
    );

    cy.readFile(downloadedFilePath).should("not.exist");

    cy.data("customize-download-btn").scrollIntoView().should("be.visible");

    cy.data("customize-download-btn")
      .should("not.have.class", "button--disabled")
      .click();

    cy.wait(1000);
    cy.readFile(downloadedFilePath).should("exist");
  });
});
