import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Suggestions from "./suggestions";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    setShowDropdown(false)
    setSearchParam(event.target.innerText)
    setFilteredUsers([])
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch(`http://dummyjson.com/users`);
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem, index) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  // console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading data ! please wait.. </h1>
      ) : (
        <input
          value={searchParam}
          type="text"
          name="search-users"
          placeholder="Search users here..."
          onChange={handleChange}
        />
      )}

      {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
};

export default SearchAutoComplete;
