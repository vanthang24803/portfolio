import { NextResponse } from "next/server";
import { DATA_JP, DATA } from "@/data/resume";

export async function GET(req: Request) {
  const acceptLang = req.headers.get("Accept-Language") || "en";
  const lang = acceptLang.split(",")[0].split("-")[0]; 

  let responseData;
  switch (lang) {
    case "ja":
      responseData = DATA_JP;
      break;
    default:
      responseData = DATA;
  }

  return NextResponse.json(responseData);
}
