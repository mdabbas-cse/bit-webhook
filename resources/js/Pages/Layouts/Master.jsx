import { Grid, GridItem } from '@chakra-ui/react';
import { Head } from '@inertiajs/inertia-react';
import Header from './Header';
export default function Master({ title, children }) {

  return (
    <>
      <Head title={title} />
        <Grid
        templateAreas={`"header header" "nav main" "nav footer"`}
        gridTemplateRows={'0.15fr 5fr 0.1fr'}
        gridTemplateColumns={'0.1fr 1fr'}
        minH='100vh'
        gap={1}
        color='blackAlpha.700'
        fontWeight='bold'
        w='100%'
        >
        <GridItem area={'header'}>
          <Header />
        </GridItem>
        {children}
      </Grid>
    </>
  )
}