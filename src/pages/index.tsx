import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col gap-x-3 gap-y-4`}>
      <h2 className="mt-12 font-bold text-2xl text-opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
        minima expedita voluptas.
      </h2>
      <p className="text-sm mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in
        ipsa molestias corrupti facere at cum enim voluptatum, cupiditate
        ducimus odit! Labore cupiditate pariatur ea magni eligendi, excepturi
        sint temporibus similique. Nesciunt repudiandae cumque, quam tenetur
        perspiciatis commodi voluptatem a placeat quas reprehenderit sit,
        quaerat amet praesentium voluptatum iste modi.
      </p>
      <h3 className="mb-[24]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        impedit doloribus ipsa iste deleniti mollitia ullam aperiam fuga? Vitae,
        aperiam!
      </h3>
      <Image
        alt="hero"
        width={1200}
        height={800}
        style={{ maxWidth: "100%" }}
        src={
          "https://img.freepik.com/free-vector/paper-style-abstract-background_23-2149157765.jpg?w=2000&t=st=1683303711~exp=1683304311~hmac=b281974f6b630541baf7b620c0adff3356c9955700bc03a900d8398b6d377658"
        }
        className="mb-12"
      />
    </main>
  );
}
