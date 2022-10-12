import React from "react";
import { Modal, ModalBody, ModalHeader, Table } from "reactstrap";
import images from "../../constants/images";
import "./SizeGuideModal.scss";

function SizeGuideModal({ isOpenSizeGuideModal, toggle }) {
  return (
    <Modal
      className="size-guide-modal-container"
      isOpen={isOpenSizeGuideModal}
      toggle={toggle}
    >
      <ModalHeader
        className="size-guide-modal-container__header"
        toggle={toggle}
      >
        <span>Size Guide</span>
      </ModalHeader>
      <ModalBody className="size-guide-modal-container__body">
        <div className="size-guide-modal-container__body--step">
          <img src={images.SIZE_GUIDE_STEP_ONE} alt="Not Found" />
          <h2>01. Draw the foot frame</h2>
          <p>
            Place your foot on the white sheet of paper, use a pen to mark the
            frame of your foot on the paper.
          </p>
        </div>
        <div className="size-guide-modal-container__body--step">
          <img src={images.SIZE_GUIDE_STEP_TWO} alt="Not Found" />
          <h2>02. Measure your foot length</h2>
          <p>
            Measure the maximum length from your toe to your heel on the marked
            foot frame.
          </p>
        </div>
        <div className="size-guide-modal-container__body--step">
          <img src={images.SIZE_GUIDE_STEP_THREE} alt="Not Found" />
          <h2>03. Measure the width of your foot</h2>
          <p>
            Use a tape measure to wrap it around your foot from the big toe
            joint to the little toe joint.
          </p>
        </div>
        <div>
          <Table bordered className="size-guide-modal-container__body__table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Width (cm)</th>
                <th>Length (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>35</td>
                <td>20.7</td>
                <td>23.1</td>
              </tr>
              <tr>
                <td>36</td>
                <td>21.1</td>
                <td>23.8</td>
              </tr>
              <tr>
                <td>37</td>
                <td>21.6</td>
                <td>24.5</td>
              </tr>
              <tr>
                <td>38</td>
                <td>22.1</td>
                <td>25.2</td>
              </tr>
              <tr>
                <td>39</td>
                <td>22.6</td>
                <td>25.8</td>
              </tr>
              <tr>
                <td>40</td>
                <td>23.1</td>
                <td>26.4</td>
              </tr>
              <tr>
                <td>41</td>
                <td>23.6</td>
                <td>27</td>
              </tr>
              <tr>
                <td>42</td>
                <td>24.2</td>
                <td>27.6</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default SizeGuideModal;
