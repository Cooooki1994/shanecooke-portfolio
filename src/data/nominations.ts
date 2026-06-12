export type NominationType =
  | "Nominee"
  | "Shortlisted"
  | "Winner"
  | "Official Selection";

export type NominationCredit = "solo" | "editor" | "production";

export type Nomination = {
  id: string;
  category: string;
  organisation: string;
  year: string;
  project: string;
  projectSlug?: string;
  type: NominationType;
  credit: NominationCredit;
  priority?: boolean;
};

/** Personal nomination — solo editor, BFE Cut Above Awards. */
export const nominations: Nomination[] = [
  {
    id: "bfe-current-affairs-2025",
    category: "Best Edited Current Affairs",
    organisation: "BFE Cut Above Awards",
    year: "2025",
    project: "My Wife, My Abuser: The Secret Footage",
    projectSlug: "my-wife-my-abuser",
    type: "Nominee",
    credit: "solo",
    priority: true,
  },
];

export const featuredNomination = nominations[0];

export const otherNominations: Nomination[] = [];
