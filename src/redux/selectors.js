import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filters) => {
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
    return visibleContacts;
  }
);
