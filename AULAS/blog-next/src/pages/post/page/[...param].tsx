import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import HomePage from '../../../containers/HomePage';
import { countAllPosts } from '../../../data/posts/count-all-posts';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PaginationData } from '../../../domain/posts/pagination';
import { PostData } from '../../../domain/posts/post';

export type PageProps = {
  posts: PostData[];
  pagination: PaginationData;
};

export default function Page({ posts, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Página não encontrada...</div>;

  return <HomePage posts={posts} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params.param[0]);
  // const category = ctx.params.param[1] || '';
  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;
  const numberOfPosts = Number(await countAllPosts());

  const nextPage = page + 1;
  const previousPage = page - 1;

  const urlQuery = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}`;
  const posts = await getAllPosts(urlQuery);

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
  };
  return {
    props: { posts, pagination },
  };
};
