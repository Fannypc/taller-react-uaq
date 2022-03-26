import styles from "./User.module.css";
import { Card } from "react-bootstrap";

function User(props) {
  const { user } = props;

  return (
    <Card>
      <Card.Body className={`${styles.card} m-5 text-center`}>
        <p>
          <strong>Name:</strong>
        </p>
        <p>{`${user.name}`}</p>
        <p>
          <strong>Base Experience:</strong>
        </p>
        <p>{`${user.base_experience}`}</p>
        <p>
          <strong>Height:</strong>
        </p>
        <p>{`${user.height}`}</p>
      </Card.Body>
    </Card>
  );
}

export default User;
