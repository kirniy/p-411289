interface SocialLinkProps {
  icon: string;
  platform: string;
  username: string;
}

const SocialLink = ({ icon, platform, username }: SocialLinkProps) => (
  <div className="flex items-center space-x-4 p-4">
    <div className="rounded-full bg-muted p-2">
      <img src={icon} alt={platform} className="w-6 h-6" loading="lazy" />
    </div>
    <div>
      <h3 className="font-semibold text-foreground">{platform}</h3>
      <p className="text-sm text-muted-foreground">{username}</p>
    </div>
  </div>
);

export const SocialLinks = () => {
  return (
    <div className="space-y-2 divide-y divide-border">
      <SocialLink
        icon="https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/0d9747e3dc7d9a1ab18f3cb3eec038856690dcb3817b5dd0d08ea127f9073e84"
        platform="Twitter"
        username="@prahav37"
      />
      <SocialLink
        icon="https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/80553ec71a0629baf904ead56c7c836c01bd04621a6ac1d111b079834edd6f1e"
        platform="Instagram"
        username="@prahav37"
      />
      <SocialLink
        icon="https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/850073b05406e8b44e45117e59648c426b7871c3f1174d9e8a6c8aa8606cf946"
        platform="Linkedin"
        username="@prahav37"
      />
    </div>
  );
};