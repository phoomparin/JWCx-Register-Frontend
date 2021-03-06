import React from 'react'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import Input from './Input'
import Select from './Select'
import TextArea from './TextArea'
import {UploadField} from './Upload'

import withWizard from '../core/form'

const toOptions = i => ({value: i, label: i})

const Options = options =>
  Object.entries(options).map(([value, label]) => ({value, label}))

export const religions = {
  atheist: 'ไม่นับถือศาสนา',
  buddhist: 'ศาสนาพุทธ',
  christianity: 'ศาสนาคริสต์',
  islam: 'ศาสนาอิสลาม',
  other: 'ศาสนาอื่นๆ',
}

export const grades = {
  m3: 'มัธยมศึกษาปีที่ 3',
  m4: 'มัธยมศึกษาปีที่ 4',
  m5: 'มัธยมศึกษาปีที่ 5',
  m6: 'มัธยมศึกษาปีที่ 6',
  other: 'อื่นๆ',
}

const religionOptions = Options(religions)
const gradeOptions = Options(grades)

const shirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(toOptions)

const PersonalForm = ({handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <UploadField name="photo" />

    <Paper>
      <Row>
        <Input name="firstname" label="ชื่อ" />
        <Input name="lastname" label="นามสกุล" />
      </Row>

      <Row>
        <Input name="age" label="อายุ" type="number" />
        <Input name="birthdate" label="วันเกิด" type="date" float />
        <Select name="religion" label="ศาสนา" options={religionOptions} />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <Select name="class" label="ระดับชั้น" options={gradeOptions} />
        <Input name="school" label="โรงเรียน" />
      </Row>

      <Row>
        <Input name="address" label="ที่อยู่" />
        <Input name="phone" label="เบอร์โทรศัพท์" />
      </Row>

      <Row>
        <Input name="email" label="อีเมล" type="email" />
        <Input name="socialMedia" label="Social Media ต่างๆ" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <Input name="disease" label="โรคประจำตัว" />
      </Row>

      <Row>
        <Input name="foodAllergy" label="อาหารที่แพ้" />
      </Row>

      <Row>
        <Input name="drugAllergy" label="ยาที่แพ้" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <Select name="shirtSize" label="ไซส์เสื้อ" options={shirtSizes} />
      </Row>

      <Row>
        <TextArea
          name="activity"
          label="กิจกรรมหรือผลงานที่น้องๆ เคยทำหรือเข้าร่วม"
        />
      </Row>
    </Paper>

    <Row>
      <Button disabled>ขั้นตอนก่อนหน้า</Button>

      <Button type="submit">ขั้นตอนถัดไป</Button>
    </Row>
  </FormContainer>
)

export default withWizard(PersonalForm)
