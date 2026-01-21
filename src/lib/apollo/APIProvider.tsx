"use client";

import React from "react";
import { makeApolloClient } from "./client";
import { ApolloProvider } from "@apollo/client/react";

export function ApolloProviders({ children }: { children: React.ReactNode }) {
  const client = makeApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}