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
    <TableContainer component={Paper} sx={{ width: { xs: "100%", lg: "60%" }, margin: "auto" }} className="border container border-slate-300">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" className="!font-bold">ID</TableCell>
            <TableCell align="center" className="!font-bold">Title</TableCell>
            <TableCell align="center" className="!font-bold">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.slice(0, 10).map((post) => (
            <TableRow key={post.id}>
              <TableCell align="center">{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell align="center">{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostsTable;
