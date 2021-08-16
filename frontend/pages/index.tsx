import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { Button } from "@cmp";
import { Box, Button as Btn, Stack, Input } from "@island.is/island-ui/core";

const QUERY_ENTRIES = gql`
  query {
    getEntries {
      id
      title
      type
    }
  }
`;

interface Entry {
  id: number;
  title: string;
  type: string;
}

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(QUERY_ENTRIES);
  const entries = data?.getEntries || [];

  return (
    <div id="main">
      <h1>Hello</h1>
      <Box padding={5} border="focus">
        <Stack space={5}>
          <div>Hello</div>
          <Btn>Bla</Btn>
          <Input label="ok"></Input>
        </Stack>
      </Box>
      <div className="my-5">
        <Button>Fancy useless button</Button>
      </div>

      {loading && <span>We loading</span>}

      {error && <span>Error {error.toString()}</span>}

      {entries.length > 0 && (
        <ul>
          {entries.map((entry: Entry) => (
            <li key={entry.id}>{entry.title}</li>
          ))}
        </ul>
      )}

      <Link href="/login">Login here</Link>
    </div>
  );
};

export default Home;
