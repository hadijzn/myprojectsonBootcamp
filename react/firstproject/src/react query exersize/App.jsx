import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

// تابع ارسال داده‌ها
const addPost = async (newPost) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
};

function AddPost() {
  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: event.target.title.value,
      body: event.target.body.value,
    };
    mutation.mutate(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" />
      <textarea name="body" placeholder="Body" />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default function App() {
  return (
    <div>
      <AddPost />
    </div>
  );
}
