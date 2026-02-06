import {
  Stack,
  Center,
  Title,
  Subtitle,
  EmailInput,
  WaitlistButton,
} from "@/components";

export default function LandingPage() {
  return (
    <Center
      style={{ minHeight: "100vh", padding: "0 6", flexDirection: "column" }}
    >
      <Stack css={{ alignItems: "center" }}>
        <Title css={{ textAlign: "center", marginBottom: "2rem" }}>
          Tired of mindless scrolling? <br /> Be present. Appreciate. Share.
        </Title>
        <Subtitle>
          A space to see, feel, and connect with life around you.
        </Subtitle>
        <Stack css={{ flexDirection: "row", gap: "3", marginTop: "2rem" }}>
          <EmailInput type="email" placeholder="Enter your email" />
          <WaitlistButton css={{ marginRight: "-2rem" }}>
            JOIN WAITLIST
          </WaitlistButton>
        </Stack>
      </Stack>
    </Center>
  );
}
