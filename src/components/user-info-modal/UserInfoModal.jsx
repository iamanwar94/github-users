import { useSelector } from "react-redux";
import {
  Modal,
  ModalHeader,
  ModalBody,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function UserInfoModal({ modal, setModal }) {
  const userInfo = useSelector((state) => state.user.userInfo);
  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>User Info</ModalHeader>
      <ModalBody>
        <div>
          <div>
            <CardTitle tag="h5" className="text-capitalize">
              {userInfo?.name}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted text-capitalize" tag="h6">
              @{userInfo?.login}
            </CardSubtitle>
          </div>
          <img
            alt={userInfo?.login}
            src={userInfo?.avatar_url}
            width="100%"
            className="rounded-2"
          />
          <CardBody>
            <div className="d-flex justify-content-between mt-2">
              <span>Followers</span>
              <span className="font-bold">{userInfo?.followers}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Following</span>
              <span className="font-bold">{userInfo?.following}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Location</span>
              <span className="font-bold">{userInfo?.location || "-"}</span>
            </div>
          </CardBody>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default UserInfoModal;
