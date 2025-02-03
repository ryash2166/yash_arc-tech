import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const PostsTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ width: { xs: "100%", lg: "50%" }, margin: "auto" }} className="border border-slate-300">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="!font-bold">ID</TableCell>
            <TableCell className="!font-bold">Title</TableCell>
            <TableCell className="!font-bold">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.slice(0,10).map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostsTable;
