export default function AboutMe() {
  const bioHeadline = "About Me";
  const sunoHeadline = "Suno Creations";
  const metalHeadline = "Metal Influences";
  const vibe =
    "I’m a Jr. Frontend Developer who finds clarity in the quiet. I’m the silent coder in a dark room—I usually place my headphones on with blared sound and let the code do the talking.";
  const interests =
    "Beyond the editor, I’m a VDC enthusiast and a blogger. I use SketchUp to model architectural ideas and Suno AI to generate the music that fuels my deep work sessions.";
  const sunoTracks = [
    {
      title: "I Don't Care",
      mood: "",
      url: "https://suno.com/s/JngH1rGZbkfT7oP3",
    },
    {
      title: "Error of the Flesh",
      mood: "",
      url: "https://suno.com/s/THJebVD0fQitKc3L",
    },
    {
      title: "A Love Letter",
      mood: "",
      url: "https://suno.com/s/D5GxQ4pE4qG1zxRq",
    },
  ];
  const metalInfluence = [
    {
      band: "Metallica",
      name: "Am I Evil",
      album: "Garage Inc.",
      videoId: "477trASWuCI",
    },
    {
      band: "Suicide Silence",
      name: "You Only Live Once",
      album: "The Black Crown",
      videoId: "ds9s-pzGD0M",
    },
    {
      band: "Fall Out Boy",
      name: "Beat It",
      album: "Believers Never Die (Greatest Hits)",
      videoId: "fIiM0_CgZ4M",
    },
  ];

  return (
    <section id="about">
      <h2>{bioHeadline}</h2>
      <div id="bio">
        <p>{vibe}</p>
        <p>{interests}</p>
      </div>

      <div id="interest">
        <div>
          <h2>{sunoHeadline}</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Mood</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {sunoTracks.map((song) => {
                return (
                  <tr key={song.title}>
                    <td>{song.title}</td>
                    <td>{song.mood}</td>
                    <td>
                      <a href={song.url}>Play Song</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div>
          <h2>{metalHeadline}</h2>
          <ul>
            {metalInfluence.map((song) => {
              return (
                <li key={song.videoId}>
                  <h3>{song.name}</h3>
                  <p>{song.band}</p>
                  <p>{song.album}</p>
                  <iframe
                    src={`https://www.youtube.com/embed/${song.videoId}`}
                  ></iframe>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
