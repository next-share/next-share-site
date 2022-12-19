import Link from 'next/link'

import {
  Box,
  Flex,
  Stack,
  Container,
  Heading,
} from '@chakra-ui/react'
import { usePrism } from 'next-prism'

export default function Home() {
  const { Code } = usePrism()
  return (
    <>
      <Box bg={'#00c3ff'} px={4} color="white">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Next Share</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Box>
                Please support us by leaving a ★ <Link href="https://github.com/Bunlong/next-share">@github</Link>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    
      <Container maxW="container.md" paddingBottom="50" marginTop={10}>
        <Stack spacing={6}>
          <Stack spacing={3}>
            <Box>
              <Heading as='h3' size='lg'>
                Installation
              </Heading>
            </Box>
            <Box>
              next-share is available on npm. It can be installed with the following command:
            <Code language='javascript'>
      {`npm install next-share --save`}
    </Code>
            </Box>
            <Box>
            next-share is available on yarn as well. It can be installed with the following command:
            <Code language='javascript'>
      {`yarn add next-share --save`}
    </Code>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
