import '../Tag/index.css';

export const Tag = ({ tag }) => (
  <span className="tag" key={tag}>
    {tag}
  </span>
);
