import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function PreviewCard({ preview, session }) {
  const formattedDate = new Date(preview.updated).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-wrap justify-between gap-2 ">
      <Card className="w-full max-w-[16rem] shadow-lg p-2 rounded-sm">
        <CardHeader floated={false} color="blue-gray" className="rouned-none">
          <Link to={`/details/${preview.id}`}>
            <img
              src={preview.image}
              alt={preview.title}
              className="rounded-none cursor-pointer"
            />
          </Link>
          <div className="to-bg-black-10 absolute inset-0 h-full w-full" />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-lg mt-4 px-2 truncate"
            >
              {preview.title}
            </Typography>
          </div>
          <Typography color="gray" className="px-2">
            Updated: {formattedDate}
          </Typography>
        </CardBody>
        <CardFooter className="pt-3">
          <Button
            size="lg"
            fullWidth={true}
            className="bg-sky-400 hover:bg-darkBlue mb-2 rounded-sm text-gray-300 hover:text-white"
          >
            <Link to={`/details/${preview.id}`}>View Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
