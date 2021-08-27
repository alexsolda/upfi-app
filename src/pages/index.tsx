import { Button, Box } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface Image {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface ImagesData {
  data: Image[];
  after: string;
}

export default function Home(): JSX.Element {
  const loadData = useCallback(
    async ({ pageParam = null }): Promise<ImagesData> => {
      const { data } = await api.get('/images', {
        params: {
          after: pageParam,
        },
      });
      return data;
    },
    []
  );

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('images', loadData, {
    getNextPageParam: lastPage => lastPage?.after || null,
  });

  const formattedData = useMemo(() => {
    const newData = data?.pages.flatMap(image => {
      return image.data.flat();
    });

    return newData;
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button
            isLoading={isFetchingNextPage}
            loadingText="Carregando..."
            onClick={() => fetchNextPage()}
          >
            Carregar mais
          </Button>
        )}
      </Box>
    </>
  );
}
