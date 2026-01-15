'use client';

import { trpc } from '@/utils/trpc';
import { useState } from 'react';

export default function HomePage() {
  const users = trpc.user.list.useQuery();
  const posts = trpc.post.list.useQuery();

  const createUser = trpc.user.create.useMutation({
    onSuccess: () => users.refetch(),
    onError: (err) => {
      console.log('err', err);
    }
  });

  const createPost = trpc.post.create.useMutation({
    onSuccess: () => posts.refetch(),
  });

  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [newPost, setNewPost] = useState({ title: '', content: '', userId: '' });

  return (
    <main className="p-4 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Users</h1>

      <ul className="list-disc pl-6">
        {users.data?.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>

      <div className="space-y-2">
        <h2 className="font-semibold">Create User</h2>
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => createUser.mutate(newUser)}
        >
          Add
        </button>
      </div>

      <hr className="my-4" />

      <h1 className="text-2xl font-bold">Posts</h1>

      <ul className="list-disc pl-6">
        {posts.data?.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.content} by{' '}
            <span className="text-sm italic">{p.user.name}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-2">
        <h2 className="font-semibold">Create Post</h2>
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <select
          className="border px-2 py-1 mr-2"
          value={newPost.userId}
          onChange={(e) => setNewPost({ ...newPost, userId: e.target.value })}
        >
          <option value="">Select user</option>
          {users.data?.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => createPost.mutate(newPost)}
        >
          Add
        </button>
      </div>
    </main>
  );
}