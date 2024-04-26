import { Box, Input, Select, VStack, Heading, Text, Button, Flex, Spacer, Image, SimpleGrid } from "@chakra-ui/react";
import { FaSearch, FaSortAmountDown, FaInstagram, FaYoutube, FaSnapchatGhost, FaTiktok } from "react-icons/fa";

import { useState } from "react";

const Index = () => {
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Heading>Influencer Discovery Platform</Heading>
        <Text>Find the best influencers for your marketing needs</Text>

        <Flex w="full">
          <Input placeholder="Search influencers" size="md" />
          <Button ml={2} leftIcon={<FaSearch />} onClick={handleSearch}>
            Show Results
          </Button>
        </Flex>

        <Flex w="full">
          <Select placeholder="Sort by" icon={<FaSortAmountDown />}>
            <option value="subscribers">Subscribers</option>
            <option value="followers">Followers</option>
            <option value="engagement">Engagement Rate</option>
          </Select>
          <Spacer />
          <Select placeholder="Platform" icon={<FaSearch />}>
            <option value="youtube">YouTube</option>
            <option value="instagram">Instagram</option>
            <option value="snapchat">Snapchat</option>
            <option value="tiktok">TikTok</option>
          </Select>
        </Flex>

        {showResults && (
          <SimpleGrid columns={3} spacing={10}>
            {influencers.map((influencer) => (
              <Box key={influencer.id} p={5} shadow="md" borderWidth="1px">
                <Image src={influencer.image} alt={influencer.name} />
                <Text mt={2} fontSize="xl" fontWeight="bold">
                  {influencer.name}
                </Text>
                <Text>{influencer.platform}</Text>
                <Text>{`${influencer.followers} followers`}</Text>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Box>
  );
};

const influencers = [
  {
    id: 1,
    name: "John Doe",
    platform: "YouTube",
    followers: 120000,
    image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwaW5mbHVlbmNlcnxlbnwwfHx8fDE3MTQxMTYxNDR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Jane Smith",
    platform: "Instagram",
    followers: 500000,
    image: "https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBpbmZsdWVuY2VyfGVufDB8fHx8MTcxNDExNjE0NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Alice Johnson",
    platform: "Snapchat",
    followers: 75000,
    image: "https://images.unsplash.com/photo-1553532435-93d532a45f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmFwY2hhdCUyMGluZmx1ZW5jZXJ8ZW58MHx8fHwxNzE0MTE2MTQ1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Bob Brown",
    platform: "TikTok",
    followers: 300000,
    image: "https://images.unsplash.com/photo-1597075095400-fb3f0de70140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aWt0b2slMjBpbmZsdWVuY2VyfGVufDB8fHx8MTcxNDExNjE0NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

export default Index;
