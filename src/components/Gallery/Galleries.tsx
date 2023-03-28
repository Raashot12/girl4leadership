import {
  Box,
  Container,
  Text,
  Flex,
  Image,
  Button,
  Modal,
} from '@mantine/core';
import { IconArrowForward, IconEye } from '@tabler/icons';
import { motion } from 'framer-motion';
import { container, child } from 'components/AboutUs/AboutUs';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaExpandAlt } from 'react-icons/fa';
import { GridWrapper } from 'styles';
import { data } from './data';

const text = 'Image Gallery';
const Galleries = () => {
  const [showMore, setShowMore] = useState(false);
  const [visibleImages, setVisibleImages] = useState(data.slice(0, 8));
  const [openModal, setOpenModal] = useState(false);
  const handleShowMore = () => {
    setVisibleImages(data.slice(0, visibleImages.length - 1 + 8));
    if (data.length - 1 === visibleImages.length) {
      setShowMore(true);
    }
  };

  const handleImageClickedOpenModal = (id: number) => {
    setOpenModal(true);
    console.log(id);
  };
  const handleShowLess = () => {
    setVisibleImages(data.slice(0, 8));
    setShowMore(false);
    window.scrollTo({ top: 359, left: 0, behavior: 'smooth' });
  };

  const renderImages = () => {
    return visibleImages.map((value) => (
      <Box key={value.id} className="card-container">
        <Image
          src={value.imageURL}
          alt="Gallery Image"
          width="100%"
          height="auto"
        />
        <Box className="text-card">
          <FaExpandAlt
            onClick={() => handleImageClickedOpenModal(value.id)}
            color="white"
            fontWeight="bold"
            size={24}
            cursor={'pointer'}
          />
        </Box>
      </Box>
    ));
  };
  return (
    <>
      <Box mt={77}>
        <Flex
          align="center"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            minHeight: '300px',
            background: '#060b20',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              left: 0,
              height: '125%',
              opacity: 0.3,
              transform: 'translateY(38px)',
              zIndex: -1,
              background:
                'url(https://res.cloudinary.com/rashot/image/upload/v1679287935/afdf_xagteq.jpg) no-repeat scroll center center',
            }}
          ></Box>
          <Container size="xl">
            <Box sx={{ textAlign: 'center', color: 'white' }}>
              <Box
                sx={{ fontWeight: 'bold' }}
                fz={{ base: 32, sm: 48 }}
                pt={10}
                mb={12}
              >
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {Array.from(text).map((letter, index) => (
                    <motion.span variants={child} key={index}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </motion.div>
              </Box>
              <Flex justify={'center'} align={'center'} columnGap={16} fz={14}>
                <Link href={'/'}>
                  <Text
                    component="div"
                    sx={{
                      cursor: 'pointer',
                      color: 'white',
                      ':hover': {
                        color: '#E16247',
                        fontWeight: 500,
                      },
                    }}
                  >
                    Home
                  </Text>
                </Link>
                <IconArrowForward />
                <Text
                  component="div"
                  sx={{
                    cursor: 'pointer',
                    color: 'white',
                    ':hover': {
                      color: '#E16247',
                      fontWeight: 500,
                    },
                  }}
                >
                  Gallery
                </Text>
              </Flex>
            </Box>
          </Container>
        </Flex>
        <Container size="xl">
          <Box py={{ base: 40, md: 90 }}>
            <GridWrapper>{renderImages()}</GridWrapper>
            <Flex align={'center'} justify={'center'} mt={{ base: 30, sm: 40 }}>
              {!showMore && data.length > 8 && (
                <Button
                  onClick={handleShowMore}
                  sx={{
                    '&.mantine-Button-root': {
                      background: '#E25D24',
                      height: 40,
                    },
                    '& .mantine-Button-label': {
                      fontSize: 16,
                      fontWeight: 600,
                    },
                    borderRadius: '8px',
                  }}
                  rightIcon={
                    <IconEye style={{ cursor: 'pointer' }} size={16} />
                  }
                >
                  Show More
                </Button>
              )}
              {showMore && (
                <Button
                  onClick={handleShowLess}
                  sx={{
                    '&.mantine-Button-root': {
                      background: '#E25D24',
                      height: 40,
                    },
                    '& .mantine-Button-label': {
                      fontSize: 16,
                      fontWeight: 600,
                    },
                    borderRadius: '8px',
                  }}
                  rightIcon={
                    <IconEye style={{ cursor: 'pointer' }} size={16} />
                  }
                >
                  Show Less
                </Button>
              )}
            </Flex>
          </Box>
        </Container>
      </Box>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        fullScreen
        title={<>Previewer</>}
        withCloseButton={true}
      ></Modal>
    </>
  );
};

export default Galleries;
