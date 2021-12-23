import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    getConnection,
    Repository,
} from "typeorm"
import { ObjectType, Field, ID } from "type-graphql"
import { Profile } from "passport"

@ObjectType()
@Entity()
export default class User {
    // typeorm connection
    private readonly connection = getConnection()

    // user repositoty
    private userRepo: Repository<User> = this.connection.getRepository(User)

    @Field((_type) => ID!)
    @PrimaryGeneratedColumn()
    public id!: number

    @Field()
    @Column("text")
    public name: string

    @Field()
    @Column("text", { unique: true, nullable: true })
    public email: string

    @Field()
    @Column("text")
    public avatar_url: string

    @Field()
    @Column({ nullable: true })
    public social_id: string

    @Field()
    @Column({ type: String })
    public current_login_type: string

    @Field((_type) => String)
    @CreateDateColumn()
    public created_at: Date

    @Field((_type) => String)
    @UpdateDateColumn()
    public updated_at: Date

    // find a row (document) using the id
    public async findOneBySocialId(social_id: string): Promise<User | undefined> {
        return await this.userRepo.findOne({ where: { social_id } })
    }

    public async save(profile: Profile): Promise<User | undefined> {
        let user: User
        try {
            // add to db
            const result = await this.connection
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({
                    name: profile.displayName,
                    email: profile.emails && profile.emails[0].value,
                    avatar_url: profile.photos && profile.photos[0].value,
                    social_id: profile.id,
                    current_login_type: profile.provider,
                })
                .returning("*")
                .execute()

            user = result.raw[0]
        } catch (err) {
            throw new Error(err.message)
        }
        return user
    }
}
