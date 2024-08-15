import {useForm} from 'react-hook-form';

export default function FormBasic(){
  const defaultValues = {
    name: 'turtle',
    email: 'admin@example.com'
  };
  const {register, handleSubmit, formState: {errors} } = useForm({
    defaultValues
  });

  const onsubmit = data => console.log(data);
  const onerror = err => console.log(err);
  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">名前：</label><br />
          <input id="name" type="text" 
          {...register('name', {
            required: '必須入力',
            maxLength: {
              value: 20,
              message: '名前は20字以内に収めてください'
            }
          })}/>
          <div>{errors.name?.message}</div>
      </div>
      <button type="submit">送信</button>
    </form>
  )
}
