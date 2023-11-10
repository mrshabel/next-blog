import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="  ">
      <h2>Dashboard</h2>
      <section>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dolor
          magnam officiis corporis blanditiis minima delectus. Quo nostrum natus
          id, ipsum harum fuga velit sed pariatur tempore animi dignissimos
          ratione. Illum vero explicabo nemo nulla provident qui labore
          voluptatibus sunt iusto asperiores eveniet expedita deserunt aliquam
          porro libero esse, quod cum voluptatum distinctio facere fugiat
          perferendis et. Aperiam, sapiente sint. Eum nulla fugit eveniet
          eligendi ullam facilis. Hic ab repudiandae, cupiditate eaque non
          aliquid neque quibusdam dolorem error dolores fugiat possimus
          perferendis amet autem officiis voluptates ipsam. Architecto, a
          excepturi.
        </p>

        <div className="flex justify-center my-8">
          <Link href="/tickets">
            <button className="btn-primary">View Tickets</button>
          </Link>
        </div>
      </section>
      <section>
        <h2>Company Updates</h2>
        <div className="card">
          <h3>New member of the web dev team...</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            rerum debitis. Ullam, earum. Accusantium quisquam, earum
            necessitatibus maxime repudiandae vero blanditiis consequuntur
            expedita assumenda nemo recusandae culpa praesentium. In, voluptate.
          </p>
        </div>
        <div className="card">
          <h3>Commiting changes and more...</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            rerum debitis. Ullam, earum. Accusantium quisquam, earum
            necessitatibus maxime repudiandae vero blanditiis consequuntur
            expedita assumenda nemo recusandae culpa praesentium. In, voluptate.
          </p>
        </div>
        <div className="card">
          <h3>The future is exciting...</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            rerum debitis. Ullam, earum. Accusantium quisquam, earum
            necessitatibus maxime repudiandae vero blanditiis consequuntur
            expedita assumenda nemo recusandae culpa praesentium. In, voluptate.
          </p>
        </div>
      </section>
    </main>
  );
}
