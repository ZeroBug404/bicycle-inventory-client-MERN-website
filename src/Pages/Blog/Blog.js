import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h3>1. Difference between javascript and nodejs</h3>
      <p>
        1.Javascript is used in frontend development. Nodejs is used in
        server-side development. 2.JavaScript use Chrome’s V8 engine written in
        C++. Nodejs is written in C, C++ and Javascript. 3.Javascript can only
        be run in the browsers. We can run Javascript outside the browser with
        the help of NodeJS.
      </p>

      <h3>2. Differences between sql and nosql databases.</h3>
      <p>
        1.SQL - Structured query language Nosql - Not only sql 2.SQL databases
        are table-based NoSQL databases are either document-based. 3. SQL
        databases are primarily called as Relational Databases NoSQL database
        are primarily called as non-relational database
      </p>

      <h3>3. What is the purpose of jwt and how does it work</h3>
      <p>
        JWT stands for JSON Web Token. It is used to share security information
        between client side and server side. It is worked by 3 period that is
        Header, Payload and Signature. Header- The type of a token like monthly
        or yearly. Payload - it contains the users info Signature - It is used
        to validate that the JWT token wasn’t modified or changed l. It can also
        be used to validate the sender.
      </p>
    </div>
  );
};

export default Blog;
