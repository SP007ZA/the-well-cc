/* eslint-disable */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useLazyQuery } from "@apollo/client";
import debounce from "lodash.debounce";
import { SearchUsersByUserNameDocument, SearchUsersByUserNameQuery, SearchUsersByUserNameQueryVariables } from "@/data/gql/graphql";


export default function ReportConcernPage() {

  const [searchText, setSearchText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");

 const [searchUsers, {data}] = useLazyQuery<SearchUsersByUserNameQuery, SearchUsersByUserNameQueryVariables>(SearchUsersByUserNameDocument)
  const suggestions = data?.users || [];

  const debouncedSearch = useMemo(() => {
    return debounce((value) => {
      if (value.trim()) {
        searchUsers({ variables: { where: {userName: {contains:value}} } });
      }
    }, 300);
  }, [searchUsers]);

  useEffect(() => {
    debouncedSearch(searchText);
  }, [searchText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedUser || !reason || !details.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = {
      reportedUserId: selectedUser.id,
      reason,
      details,
    };

    console.log("Submitting report:", payload);
  

    // TODO: Send this to your API / GraphQL mutation
  };

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg border border-rose-200">
        <h2 className="text-3xl font-bold text-rose-700 mb-2">Report a Concern</h2>
        <p className="text-sm text-gray-600 mb-6">
          Please let us know if you’ve experienced something concerning. Your report will remain confidential.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-rose-700">Username of the person you're reporting</label>
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setSelectedUser(null);
              }}
              className="mt-1 w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="Start typing username..."
            />
            {suggestions.length > 0 && !selectedUser && (
              <ul className="bg-white border border-rose-200 rounded-lg mt-1 shadow-md max-h-40 overflow-auto">
                {suggestions.map((user) => (
                  <li
                    key={user.id}
                    onClick={() => {
                      setSelectedUser(user);
                      setSearchText(user.userName);
                    }}
                    className="px-4 py-2 hover:bg-rose-100 cursor-pointer"
                  >
                    @{user.userName}{" "}
                  
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-rose-700">Reason for the report</label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              required
            >
              <option value="" disabled>Select a reason</option>
              <option value="harassment">Harassment or bullying</option>
              <option value="inappropriate">Inappropriate content</option>
              <option value="safety">Safety concern</option>
              <option value="fake">Fake profile or impersonation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-rose-700">Additional Details</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              rows={5}
              placeholder="Please provide more details..."
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
