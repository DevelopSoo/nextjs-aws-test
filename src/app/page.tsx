"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <div>한국어: 안녕 docker 배포 테스트 2</div>
      <div>영어: {message}</div>
    </div>
  );
}
