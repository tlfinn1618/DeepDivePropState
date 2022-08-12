import React, { Component } from "react";
import { JournalEntry } from "./journal_entry";

const rawJournalData = [
  { title: "Post One", content: "Post content", status: "draft" },
  { title: "Post Two", content: "More content", status: "published" },
  { title: "Post Three", content: "More content", status: "published" },
  { title: "Post Four", content: "More content", status: "published" }
];

export default class JournalList extends Component {
  constructor(props) {
    super();

    this.state = {
      journalData: rawJournalData,
      isOpen: true
    };

    // Added binding for the 3 functions
    this.clearEntries = this.clearEntries.bind(this);
    this.showAllEntries = this.showAllEntries.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  // Took arrow function out and just made them anonymous functions
  clearEntries() {
    this.setState({ journalData: [], isOpen: false });
  };

  showAllEntries() {
    this.setState({ journalData: rawJournalData, isOpen: true });
  };

  toggleStatus() {
    if (this.state.isOpen) {
      this.setState({ journalData: [], isOpen: false });
    } else {
      this.setState({ journalData: rawJournalData, isOpen: true });
    }
  };

  // *** From the original code from video and from GitHub Repo. These did not work on my machine. ***
  // clearEntries = () => {
  //   this.setState({ journalData: [], isOpen: false });
  // };

  // showAllEntries = () => {
  //   this.setState({ journalData: rawJournalData, isOpen: true });
  // };

  // toggleStatus = () => {
  //   if (this.state.isOpen) {
  //     this.setState({ journalData: [], isOpen: false });
  //   } else {
  //     this.setState({ journalData: rawJournalData, isOpen: true });
  //   }
  // };


  render() {
    const journalEntries = this.state.journalData.map(journalEntry => {
      return (
        <div key={journalEntry.title}>
          <JournalEntry
            title={journalEntry.title}
            content={journalEntry.content}
          />
        </div>
      );
    });

    return (
      <div>
        <h1>{this.props.heading}</h1>
        {journalEntries}
        <button onClick={this.clearEntries}>Clear Journal Entries</button>
        <button onClick={this.showAllEntries}>Show All Journal Entries</button>
        <button onClick={this.toggleStatus}>Toggle Status</button>
      </div>
    );
  }
}