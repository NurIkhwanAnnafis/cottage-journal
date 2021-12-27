import FormWrapper from '../../../../components/Form/Form'
import { useContext } from 'react';
import { ContextAdmin } from '../context/ContextProvider';
import FormJournal from '../form';

const index = (props) => {
  const context = useContext(ContextAdmin);
  const {
    form,
    setForm,
  } = context.useModelAdminForm();

  return (
    <div>
      <FormWrapper 
        title="Buat Journal" 
      >
        <FormJournal />
      </FormWrapper>
    </div>
  )
}

export default index;