type RichTextProps = {
  Content: string;
};

function RichText({ Content }: RichTextProps) {
  return (
    <section>
      <p>{Content}</p>
    </section>
  );
}

export default RichText;