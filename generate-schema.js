const { generate } = require("@graphql-codegen/cli");

const generateSchema = async () => {
  await generate(
    {
      schema: "https://your-server-url.com/graphql",
      headers: {
        // Add Headers if needed
        Authorization: "Bearer XXXXX",
      },
      generates: {
        [`${process.cwd()}/schema.graphql`]: {
          plugins: ["schema-ast"],
          config: {
            includeDirectives: true,
            federation: true,
          },
        },
      },
    },
    true
  );
};
