import { colors } from "../../styles/theme";

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>

      <style jsx>
        {`
          button {
            align-items: center;
            background: ${colors.black};
            border: 0;
            color: ${colors.white};
            cursor: pointer;
            display: flex;
            border-radius: 9999px;
            font-size: 16px;
            font-weight: 800;
            padding: 8px 24px;
            transition: opacity 0.3 ease;
          }

          button > :global(svg) {
            margin-right: 8px;
          }

          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  );
}
