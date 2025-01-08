import { Card } from "@/components/ui/card";
import { Section, SectionTitle } from "./Section";

const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
    },
  });
  const { access_token } = await response.json();

  return access_token;
};

const getRecentSong = async (access_token: string) => {
  try {
    const recentSong = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const recentSongData = await recentSong.json();
    return recentSongData;
  } catch (error) {
    console.error("Error fetching song:", error);
    return null;
  }
};

export const Songs = async () => {
  const access_token = await getAccessToken();
  const recentSong = await getRecentSong(access_token);
  console.log(recentSong);
  return (
    <Section>
      <SectionTitle>Last played song</SectionTitle>
      <Card className="flex items-center gap-4 p-2">
        <div className="size-10 rounded-full bg-muted">icon</div>
        <div>song title</div>
      </Card>
    </Section>
  );
};
