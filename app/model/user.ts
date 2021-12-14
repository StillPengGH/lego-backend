import { Application } from 'egg'
import { Schema } from 'mongoose'

// 定义User类型
export interface UserProps {
	username: string
	password: string
	email?: string
	nickname?: string
	picture?: string
	phoneNumber?: string
	createAt: Date
	updateAt: Date
	type: 'email' | 'cellphone' | 'auth'
	provider?: 'gitee'
	oauthId?: string
}

function initUserModel(app: Application) {
	// 定义UserSchema
	const UserSchema = new Schema<UserProps>(
		{
			username: { type: String, unique: true, required: true },
			password: { type: String },
			nickName: { type: String },
			picture: { type: String },
			email: { type: String },
			phoneNumber: { type: String },
			type: { type: String, default: 'email' },
			provider: { type: String },
			oauthID: { type: String },
		},
		{
			timestamps: true,
		}
	)
	return app.mongoose.model('User', UserSchema)
}

export default initUserModel
