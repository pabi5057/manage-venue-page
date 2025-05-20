"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Image from 'next/image';
import { Box, Grid, Container } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CircleIcon from '@mui/icons-material/Circle';
import { motion } from "framer-motion";


export default function CardComponent({ venueData }) {
  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={2} justifyContent="flex-start">
        {venueData?.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{
            display: 'flex', justifyContent: "flex-start",
          }}>
            {
              item?.type === "Inactive" ? (

                <Card
                  sx={{
                    width: 275,
                    border: 'none',
                    boxShadow: 'none',
                    position: 'relative',
                    opacity: 0.6,
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: "1rem",
                  }}
                >
                  <CardActionArea sx={{
                    position: 'relative', borderTopLeftRadius: '1rem',
                    borderTopRightRadius: "1rem",
                  }} >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', overflow: 'hidden' }}
                    >
                      <Image
                        src={item?.image || "/images/img4.png"}
                        alt={item?.title}
                        width={275}
                        height={150}
                        style={{
                          width: '100%',
                          height: '150px',
                          objectFit: 'cover',
                          borderTopLeftRadius: '1rem',
                          borderTopRightRadius: "1rem",
                        }}
                      />
                    </motion.div>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        height: 32,
                        width: 32,
                        bgcolor: 'rgba(255, 255, 255)',
                        borderRadius: '50%',
                        padding: '4px',
                        zIndex: 1,
                        color: 'black',
                        cursor: 'pointer',
                      }}
                    >
                      <MoreHorizIcon fontSize="small" />
                    </Box>

                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        left: 8,

                        bgcolor: 'rgba(255, 255, 255)',
                        color: '#ac00e6',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        px: 1,
                        py: 0.5,
                        borderRadius: '10px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <CircleIcon sx={{ fontSize: "0.5rem", mr: 0.5 }} />
                      <p>{item.type}</p>
                    </Box>
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div" sx={{ fontSize: "1rem", fontWeight: 700, ml: -2, lineHeight: "1.5" }}>
                      {item?.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: -2, lineHeight: "1.5" }}>
                      {item?.address}
                    </Typography>
                  </CardContent>

                </Card>
              ) : (
                <Card
                  sx={{
                    width: 275,
                    border: 'none',
                    boxShadow: 'none',
                    position: 'relative',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: "1rem",
                  }}
                >
                  <CardActionArea sx={{
                    position: 'relative', borderTopLeftRadius: '1rem',
                    borderTopRightRadius: "1rem",
                  }} >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', overflow: 'hidden' }}
                    >
                      <Image
                        src={item?.image ? item?.image : "/images/img4.png"}
                        alt={item?.title}
                        width={275}
                        height={150}
                        style={{
                          width: '100%',
                          height: '150px',
                          objectFit: 'cover',
                          borderTopLeftRadius: '10px',
                          borderTopRightRadius: "10px",
                        }}
                      />
                    </motion.div>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        width: 32,
                        height: 32,
                        bgcolor: 'rgba(255, 255, 255)',
                        borderRadius: '50%',
                        padding: '4px',
                        zIndex: 1,
                        color: 'black',
                        cursor: 'pointer',
                      }}
                    >
                      <MoreHorizIcon fontSize="small" />
                    </Box>

                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        left: 8,
                        bgcolor: 'rgba(255, 255, 255)',
                        color: '#ac00e6',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        px: 1,
                        py: 0.5,
                        borderRadius: '10px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <CircleIcon sx={{ fontSize: "0.5rem", mr: 0.5 }} />
                      <p>{item.type}</p>
                    </Box>
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div" sx={{ fontSize: "1rem", fontWeight: 700, ml: -2, lineHeight: "1.5" }}>
                      {item?.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: -2, lineHeight: "1.5" }}>
                      {item?.address}
                    </Typography>
                  </CardContent>

                </Card>
              )
            }
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
