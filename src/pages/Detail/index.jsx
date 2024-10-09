import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player/youtube";
import Channel from "./Channel";
import Description from "./Description";
import Card from "../../components/Card";
import Comments from "./Comments";

const Detail = () => {
  const [video, setVideo] = useState(null);

  const [searchParams] = useSearchParams();

  const id = searchParams.get("v");

  useEffect(() => {
    const params = { id, extend: 1 };

    api
      .get(`/video/info`, { params })
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto">
      <div>
        <div className="h-[50vh] lg:h-[60vh] rounded overflow-hidden">
          <ReactPlayer
            muted={true}
            playing={true}
            height={"100%"}
            width={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
        </div>

        {video && (
          <>
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>

            <Channel video={video} />

            <Description video={video} />

            <Comments videoId={id} />
          </>
        )}
      </div>

      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === "video" && (
              <Card video={item} key={item.videoId} isRow />
            )
        )}
      </div>
    </div>
  );
};

export default Detail;
