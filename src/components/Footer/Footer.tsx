import {
  Container,
  Box,
  Grid,
  useMantineColorScheme,
  Text,
  Flex,
  TextInput,
} from "@mantine/core"
import {IconSend} from "@tabler/icons"
import React, {useState} from "react"
import Swal from "sweetalert2"

const Footer = () => {
  const {colorScheme} = useMantineColorScheme()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSummitted] = useState(false)
  const handleSubmit = () => {
    if (!email) return
    setEmail("")
    setIsSummitted(true)
    Swal.fire(
      "Newsletter Notification!",
      "This is to notify you that your email is successfully submitted!",
      "success"
    )
  }
  return (
    <Box
      py={145}
      sx={{
        background: colorScheme === "dark" ? "#232324" : "#E25D24",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <Container size={"xl"}>
        <Grid gutter={40}>
          <Grid.Col md={3}>
            <Text fw={600} mb={28} tt={"uppercase"}>
              About Agency
            </Text>
            <Text
              fw={300}
              fz={14}
              lh={"26px"}
              sx={{color: colorScheme === "dark" ? "#c4c4c4" : "#fffff"}}
            >
              The world has become so fast paced that people don’t want to stand
              by reading a page of information, they would much rather look at a
              presentation and understand the message. It has come to a point
            </Text>
          </Grid.Col>
          <Grid.Col md={3}>
            <Text fw={600} mb={28}>
              NAVIGATION LINKS
            </Text>
            <Grid
              gutter={25}
              sx={{
                color: colorScheme === "dark" ? "#c4c4c4" : "#fffff",
                cursor: "pointer",
              }}
            >
              <Grid.Col sm={6}>
                <Text component="a" fw={300} fz={14} lh={"24px"}>
                  Home
                </Text>
              </Grid.Col>
              <Grid.Col sm={6}>
                <Text component="a" fw={300} fz={14} lh={"24px"}>
                  About
                </Text>
              </Grid.Col>
              <Grid.Col sm={6}>
                {" "}
                <Text component="a" fw={300} fz={14} lh={"24px"}>
                  Gallery
                </Text>
              </Grid.Col>
              <Grid.Col sm={6}>
                {" "}
                <Text component="a" fw={300} fz={14} lh={"24px"}>
                  Blog
                </Text>
              </Grid.Col>
              <Grid.Col sm={6}>
                {" "}
                <Text component="a" fw={300} fz={14} lh={"24px"}>
                  Merch Collections
                </Text>
              </Grid.Col>
              <Grid.Col sm={6}>
                {" "}
                <Text component="a" fw={300} fz={14} lh={"24px"}>
                  Contact
                </Text>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col md={3}>
            <Text component="a" fw={600}>
              NEWSLETTER
            </Text>
            <Text
              sx={{color: colorScheme === "dark" ? "#c4c4c4" : "#fffff"}}
              lh={"24px"}
              fz={14}
              mt={28}
            >
              For business professionals caught between high OEM price and
              mediocre print and graphic output,
            </Text>
            <TextInput
              sx={{
                marginTop: 15,

                ".mantine-Input-input:focus-within": {
                  borderColor: "#c4c4c4",
                },
                ".mantine-Input-input": {
                  background: colorScheme === "dark" ? "#25262B" : "none",
                  color: colorScheme === "dark" ? "#c4c4c4" : "white",
                  height: "2.5rem",
                },
                ".mantine-Input-input::placeholder": {
                  color: colorScheme === "dark" ? "#c4c4c4" : "white",
                  fontSize: 14,
                },
              }}
              rightSection={
                <IconSend
                  style={{cursor: "pointer"}}
                  size={16}
                  onClick={handleSubmit}
                />
              }
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
              placeholder="Email Address"
              type="email"
            />{" "}
          </Grid.Col>
          <Grid.Col md={3}>
            <Text component="a" fw={600}>
              INSTAFEED
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
//
