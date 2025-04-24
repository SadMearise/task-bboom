import { SelectChangeEvent } from "@mui/material";
import { AccessControlTable, AuditLogs, ContentContainer, Section } from "../../components";
import { User } from "../../types";
import { AccessLevel } from "../../types/enums";
import styles from "./AdminPage.module.css";
import { useState, useCallback } from "react";
import useUserStore from "../../store/user";
import { getCurrentDateTime } from "../../utils/helpers/time";

type UserHeaders = Record<keyof User, string>;

const headers: UserHeaders = {
  id: "ID",
  name: "Name",
  email: "Email",
  role: "Role",
  accessLevel: "Level Access",
};

const AdminPage = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const removeUser = useUserStore((state) => state.removeUser);
  const changeRole = useUserStore((state) => state.changeRole);
  const changeAccessLevel = useUserStore((state) => state.changeAccessLevel);

  const handleRemoveUser = useCallback(
    (userId: User["id"]) => {
      const newLog = `Deleted by user ID ${userId} at ${getCurrentDateTime()}`;

      removeUser(userId);
      setLogs((prevLogs) => [...prevLogs, newLog]);
    },
    [removeUser],
  );

  const handleRoleChange = useCallback(
    (newRole: User["role"], user: User) => {
      const newLog = `Role of user ${user.name} changed from ${user.role} to ${newRole} at ${getCurrentDateTime()}`;

      changeRole(user.id, newRole);
      setLogs((prevLogs) => [...prevLogs, newLog]);
    },
    [changeRole],
  );

  const handleAccessLevelChange = useCallback(
    (event: SelectChangeEvent<AccessLevel>, user: User) => {
      const newAccessLevel = event.target.value as AccessLevel;
      const newLog = `Access level of user ${user.name} changed from ${user.accessLevel} to ${newAccessLevel} at ${getCurrentDateTime()}`;

      changeAccessLevel(user.id, newAccessLevel);
      setLogs((prevLogs) => [...prevLogs, newLog]);
    },
    [changeAccessLevel],
  );

  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <ContentContainer className={styles.col}>
          <Section title="Access control">
            <AccessControlTable
              headers={Object.values(headers)}
              onDeleteClick={handleRemoveUser}
              onRoleChange={handleRoleChange}
              onAccessLevelChange={handleAccessLevelChange}
            />
          </Section>
        </ContentContainer>
        <ContentContainer className={styles.col}>
          <Section title="Logs">
            <AuditLogs logs={logs} />
          </Section>
        </ContentContainer>
      </div>
    </main>
  );
};

export default AdminPage;
