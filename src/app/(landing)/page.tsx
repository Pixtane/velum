"use client";
import {
  Stack,
  Center,
  Title,
  Subtitle,
  EmailInput,
  WaitlistButton,
} from "@/components";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  return (
    <Stack>
      <Stack css={{ h: "100vh" }}>
        <Center css={{ mt: "2" }}>
          <div
            className="logo transition-colors"
            onClick={() => router.push("/gate")}
          >
            Velum
          </div>
        </Center>
        <Center css={{ h: "100%", padding: "0 6", flexDirection: "column" }}>
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
      </Stack>
      <Center>
        <Subtitle css={{ fontSize: "meta", color: "textTertiary" }}>
          © 2026 Velum. All rights reserved.
        </Subtitle>
      </Center>
    </Stack>
  );
}
