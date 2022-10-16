/** @format */

import { Grid, Collapse, Text, Avatar } from "@nextui-org/react";
import { I_TODO } from "./home.types";

export function TaskList({ tasks }: { tasks: I_TODO[] }) {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Collapse.Group splitted>
          {tasks.map((e) => (
            <Collapse
              key={e.task.added_on.toISOString()}
              title={e.task.title}
              subtitle={e.task.subtitle}
              contentLeft={
                <Avatar
                  size="lg"
                  src={
                    "https://media-exp1.licdn.com/dms/image/C4D03AQF22GFXLyPNAg/profile-displayphoto-shrink_800_800/0/1655118472505?e=1671667200&v=beta&t=7V38wOZKOtYoh-WKvZL7sLq2i11CfmkZdncYITLBR08"
                  }
                  color="gradient"
                  bordered
                  squared
                />
              }
            >
              {e.task.description}
            </Collapse>
          ))}
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
}
