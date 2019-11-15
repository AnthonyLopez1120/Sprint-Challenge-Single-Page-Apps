import React, { useState } from "react";
import { Link } from "react-router-dom"
// import { Form, Field } from "formik"


export default function SearchForm(props) {
  
  const characters = props.characters;
  console.log(characters);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");

  return (
    <section className="search-form">
     {/* <Form>
       <label>Search</label>
       <Field 
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        value={searchTerm}
         />

     </Form> */}
      <form>
      <label>Search</label>
      <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        vaule={searchStart}
        onChange={handleChange}
      />
    </form>
    <Link to = "/">Home</Link>
    </section>

  );
}
