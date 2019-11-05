import React from 'react';
import { useParams } from 'react-router-dom';

export function MyProfile() {
  return <div>42</div>;
}

export function UserProfile() {
  let { githubLogin } = useParams();

  return <div>Je suis le profil de {githubLogin}</div>;
}
