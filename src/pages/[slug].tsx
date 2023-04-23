import { createServerSideHelpers } from "@trpc/react-query/server";
import { GetStaticPaths, GetStaticProps } from "next";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import superjson from "superjson";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ["@denisSorokinZ"],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const ssg = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
  });

  const slug = context.params?.slug;

  // await ssg.posts.getAll.prefetch({  })

  return {
    props: {},
  };
};


