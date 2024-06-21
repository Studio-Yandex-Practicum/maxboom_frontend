import { IUserprofile } from '../scheme/editAccountFormSliceScheme'

export type IEditAccountFormValues = Omit<IUserprofile, 'is_vendor'>
