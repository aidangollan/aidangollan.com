import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Article({
  markdown 
}: {
  markdown: string;
}) {
  return (
    <article className="px-4 py-12 mx-auto">
      <div className="prose prose-lg prose-indigo mx-auto">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </article>
  );
}