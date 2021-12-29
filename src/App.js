import "./styles.css";
import Card from "./card";

export default function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card
            tire="Free"
            price="0"
            user="Single User"
            storage="5"
            muted="text-muted"
            times="fas fa-times"
          />
          <Card
            tire="Plus"
            price="9"
            users="5 Users"
            storage="50"
            muted1="text-muted"
            check="fas fa-check"
            check1="fas fa-times"
          />
          <Card
            tire="Pro"
            price="49"
            users="Unlimited Users"
            storage="150"
            subdomains="Unlimited"
            subdomain="Free Subdomains"
            check="fas fa-check"
          />
        </div>
      </div>
    </section>
  );
}
